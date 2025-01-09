@echo off
cd /d %~dp0
start cmd /k "deno -A serve.js"