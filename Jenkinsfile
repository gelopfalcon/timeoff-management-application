pipeline {
    agent any
    stages {
        stage('Build and Test') {
            steps {
                echo "Step 1: Installing dependencies"
                sh 'npm ci'
            }

        }

        stage('Build image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh ' echo "$PASSWORD" | docker login --username=$USERNAME --password-stdin'
                    echo "Step 1: Build Docker image"
                    sh 'docker build -t glgelopfalcon/timeoff:${BUILD_NUMBER} .'
                    echo "Step 2: Push image"
                    sh 'docker push glgelopfalcon/timeoff:${BUILD_NUMBER}'
            }
         }   
        }
    }
}