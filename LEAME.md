
# 10.11.2024 mdy
1. Created the repo
1. start cleaning extra/duplicate/stale/old files
1. from 400Mb to 200Mb and counting
1. found the last index.html for quarter1 at end 2023
1. It is in %public%\CANVAS_FILE_CACHES\quarter1\index.html, it is in original image
1. Index.html was copied into this repo as index-cfc.html and updated.
1. It needs to be transferred to students laptops. 

# 11.2.2023 mdy

1. git remote set-url origin /c/Users/Public/canvas_file_cache/example.nel/.git
in change of /c/users/public/videos/example.nel/.git 
which are the same because of symlinks but just to be consistent with the configuration
in my class and other laptops. 
1. In short: 
    the remote repo is in canvas_file_cache
    the local repo is in documents somewhere in a folder with a name including "git"
1. A git remote add origin /c/somepath/to/someremote/repo/.git 
is when creating the remote. They say github, bitbucket or others but never mention another local location
1. Now I know.


# 9.27.2023
Begins clean up

# 3.15.2021
symlink created at example.nel/public_html/a/RAW-VIDEOS from youtube.nel/public_html/RAS-VIDEOS
pending testing how it behaves in a windows host
The link is in NTFS 30GB drive.

# 11.5.2023
1. git submodule add /Z/CANVAS_FILE_CACHES/GITHUBMINE/CFC-Directory/.git
1. git submodule add /z/CANVAS_FILE_CACHES/GITHUBMINE/ClassOfHacks/.git
1. set in creepypandatrex z to cisgen2/users/public


CURRENT LOCATION: git-seventh-user at creepy/documents
run git submodule update --init --recursive
ERROR: fatal transport 'file' not allowed
searched stackoverflow number 74486167
run git config --global protocol.file.allow always
run again git submodule update --init --recursive
and yes the projects were updated but with the head detached.


