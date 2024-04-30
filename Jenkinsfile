pipeline {
    agent any

    tools {
        nodejs '22.0.0'
        docker 'latest'
    }

    environment {
        DOCKER_IMAGE_NAME = 'np-projekt-app'
        MYSQL_ROOT_PASSWORD = credentials('mysql-root-password')
        DATABASE_URL = credentials('database-url')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies to run tests') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker compose build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker compose up -d'
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker compose down'
            }
        }
    }
}