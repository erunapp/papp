@echo off
set JAVA_HOME=C:/Software/Jdk11
set here=%~dp0
set work=com.web3p.menu

cd /d "%here%/%work%"
%JAVA_HOME%/bin/jar.exe -cf jar/src.jar -C web/src . >NUL

rd /s /q "%here%/%work%/web/src"

cd %here%