from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from api.routes import auth_bp  # Asegúrate de que la ruta es correcta

app = Flask(__name__)

# Configuraciones
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'  # Cambia esto según tu configuración
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Cambia esto a una clave más segura

# Inicializar extensiones
db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
CORS(app, origins=["https://probable-giggle-v6pxg47j75qvcxpgw-3000.app.github.dev"])  # Ajusta según necesites

# Registro de blueprints
app.register_blueprint(auth_bp)

# Ruta de prueba
@app.route('/')
def home():
    return "API is running!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # Cambia el puerto si es necesario
