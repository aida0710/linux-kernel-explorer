---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/usb/ffs-aio-example/simple/host_app/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CC = gcc
LIBUSB_CFLAGS = $(shell pkg-config --cflags libusb-1.0)
LIBUSB_LIBS = $(shell pkg-config --libs libusb-1.0)
WARNINGS = -Wall -Wextra
CFLAGS = $(LIBUSB_CFLAGS) $(WARNINGS)
LDFLAGS = $(LIBUSB_LIBS)

all: test
%: %.c
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)

clean:
	$(RM) test

```
