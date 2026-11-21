@echo off
echo Iniciando Fisioterapia (Principal)...
start cmd /k "cd Fisioterapia && npm run dev -- -p 3001"

echo Iniciando Estetica Corporal...
start cmd /k "cd Estetica_Corporal && npm run dev -- -p 3002"

echo Iniciando Estetica Facial...
start cmd /k "cd Estetica_Facial && npm run dev -- -p 3003"

echo Todos los servidores se estan iniciando en ventanas separadas.
echo Por favor, espera unos segundos y luego abre tu navegador en:
echo http://localhost:3001  (Fisioterapia: /fisioterapia - Estetica Corporal: /estetica-corporal - Estetica Facial: /estetica-facial)
pause
