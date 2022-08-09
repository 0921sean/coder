# Generated by Django 4.0.6 on 2022-08-08 23:37

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('account_app', '0017_rename_datetime_pystepattend_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pystepattend',
            name='date',
        ),
        migrations.AddField(
            model_name='pystepattend',
            name='datetime',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]