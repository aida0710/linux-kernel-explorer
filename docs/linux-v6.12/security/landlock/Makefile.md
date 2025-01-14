---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/security/landlock/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_SECURITY_LANDLOCK) := landlock.o

landlock-y := setup.o syscalls.o object.o ruleset.o \
	cred.o task.o fs.o

landlock-$(CONFIG_INET) += net.o

```
