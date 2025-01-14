---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/firewire/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
prefix = /usr
nosy-dump-version = 0.4

CC = gcc

all : nosy-dump

nosy-dump : CFLAGS = -Wall -O2 -g
nosy-dump : CPPFLAGS = -DVERSION=\"$(nosy-dump-version)\" -I../../drivers/firewire
nosy-dump : LDFLAGS = -g
nosy-dump : LDLIBS = -lpopt

nosy-dump : nosy-dump.o decode-fcp.o

clean :
	rm -rf *.o nosy-dump

install :
	install nosy-dump $(prefix)/bin/nosy-dump

```
