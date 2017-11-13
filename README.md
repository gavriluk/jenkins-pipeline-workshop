# jenkins-pipeline-workshop
Репозиторий предназначен для прохождения ознакомительных курсов Jenkins, BitBucket, Sonar, Nexus

### Требования к ПК:
- Должен быть установлен docker
- Должен быть установлен git

### Запуск:
Для загрузки и запуска курса нужно выполнить следующие команды:
```
git clone https://github.com/gavriluk/jenkins-pipeline-workshop
cd jenkins-pipeline-workshop
docker-compose up -d
```
Просмотр запущенных контейнеров осуществляется командой
```docker ps```

### Координаты:
Сервисы стартуют некоторое время. После запуска сервисов они должны быть доступны по следующим портам:
- Portainer порт: 9001 http://localhost:9001/
- Jenkins порт: 8080 http://localhost:8080/
- Nexus порт: 8081 http://localhost:8081/
- Sonar порт: 9000 http://localhost:9000/
- BitBucket порт: 7990 http://localhost:7990/

### Явки:пароли:
:godmode: admin:admin

:hurtrealbad: user:user
