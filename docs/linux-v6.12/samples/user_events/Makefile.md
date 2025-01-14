---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/user_events/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CFLAGS += -Wl,-no-as-needed -Wall -I../../usr/include

example: example.o
example.o: example.c

```
