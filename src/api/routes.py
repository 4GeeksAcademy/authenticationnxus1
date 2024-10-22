from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User, db  # Asegúrate de que esto sea correcto para tu estructura
from flask_jwt_extended import create_access_token
from .models import User, db

auth_bp = Blueprint('auth', __name__)
api = Blueprint('api', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Missing email or password'}), 400

    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'message': 'User already exists'}), 409

    new_user = User(email=data['email'], password=generate_password_hash(data['password'], method='sha256'))
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.email)
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Asegúrate de que tu archivo principal (app.py o similar) registre este blueprint
