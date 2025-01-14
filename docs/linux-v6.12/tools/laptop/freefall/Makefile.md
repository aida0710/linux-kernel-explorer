---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/laptop/freefall/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
PREFIX ?= /usr
SBINDIR ?= sbin
INSTALL ?= install

TARGET = freefall

all: $(TARGET)

%: %.c
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $<

clean:
	$(RM) $(TARGET)

install: freefall
	$(INSTALL) -D -m 755 $(TARGET) $(DESTDIR)$(PREFIX)/$(SBINDIR)/$(TARGET)

```
