# Generated by Django 3.1.7 on 2021-03-19 08:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_auto_20210319_0815'),
    ]

    operations = [
        migrations.AlterField(
            model_name='singleseries',
            name='exercise',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.exercise'),
        ),
        migrations.AlterField(
            model_name='singleseries',
            name='ownexercise',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.ownexercise'),
        ),
    ]