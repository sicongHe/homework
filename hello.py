# -*- coding:utf-8 -*-  

import os
from flask import Flask, render_template, session, redirect, url_for, flash
from flask.ext.script import Manager
from flask.ext.bootstrap import Bootstrap
from flask.ext.moment import Moment
from flask.ext.wtf import Form
from wtforms import StringField, SubmitField,PasswordField
from wtforms.validators import Required
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.script import Shell
from werkzeug.security import generate_password_hash, check_password_hash


basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

manager = Manager(app)
bootstrap = Bootstrap(app)
db = SQLAlchemy(app)
#----------------------数据库--------------
class User(db.Model):
	__tablename__ = 'user'
	id = db.Column(db.String(64),primary_key=True,unique=True)
	pwd = db.Column(db.Integer)
	def __repr__(self):
		return '<Role %r>' % self.id
	

        

#---------------------表单---------------
class NameForm(Form):
	name = StringField("请输入用户名",validators=[Required()])
	password =  PasswordField("pwd",validators=[Required()])
	submit = SubmitField("submit")

def makeshell():
	return dict(app=app,db=db,User=User)
manager.add_command("shell",Shell(make_context=makeshell))


@app.route('/index/login',methods=['GET','POST'])
def login():
        done=' '
    	form = NameForm()
	if form.validate_on_submit():
		user=User.query.filter_by(id=form.name.data).first()
		
		if user is not None and int(form.password.data)==int(user.pwd):
			wnm=form.name.data
			return render_template('welcome.html',name=wnm)
		else:
			return render_template('log.html',form=form,name = session.get('name'),done=user.pwd)	
		
	return render_template('log.html',form=form,name = session.get('name'),done=done)

@app.route('/welcome')
def welcome():
	return render_template('welcome.html',name=wnm)


@app.route('/index')
def index():
	return render_template('index.html')


@app.errorhandler(500)
def sssss(e):
	return render_template('404.html'),500

@app.errorhandler(404)
def page_not_found(e):
	return render_template('404.html'),404



if __name__=='__main__':
	db.create_all()
    	manager.run()
