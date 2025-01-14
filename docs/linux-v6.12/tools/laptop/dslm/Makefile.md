---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/laptop/dslm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
CC := $(CROSS_COMPILE)gcc
CFLAGS := -I../../usr/include

PROGS := dslm

all: $(PROGS)

clean:
	rm -fr $(PROGS)

```
