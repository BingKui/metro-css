@echo off
echo 当前盘符和路径：%~dp0
pushd "%~dp0"
pushd "%cd%\"
echo Grunt命令开始执行
grunt