# Generated by Django 4.0.6 on 2022-07-24 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_app', '0004_attend_friday_attend_monday_attend_saturday_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='python0',
        ),
        migrations.AddField(
            model_name='user',
            name='python4',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='python1',
            field=models.BooleanField(default=True),
        ),
    ]
