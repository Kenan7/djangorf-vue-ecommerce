FROM python:3.8.0-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


RUN mkdir /code
WORKDIR /code
# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip

ADD requirements.txt /code/
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt -r requirements.txt
COPY scripts/start*.sh /
ADD . /code/
CMD ["python3", "backend/manage.py", "collectstatic", "--no-input"]
CMD ["python3", "backend/manage.py", "makemigrations"]
CMD ["python3", "backend/manage.py", "migrate", "--no-input"]
CMD ["gunicorn", "backend.wsgi", "-b", "0.0.0.0:7000"]