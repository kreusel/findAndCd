#Usage:

##Add this to your .bashrc
```
p () {
        target=$(find-and-cd $1 ${2-"$HOME/git"});
        if [[ ! -z $target ]]; then
                cd $target;
        fi;
        unset target
}
```

##Use
```
$ p myProjectFolder

```