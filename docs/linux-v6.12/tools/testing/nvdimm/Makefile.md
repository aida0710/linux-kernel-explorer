---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/nvdimm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
KDIR ?= ../../../

default:
	$(MAKE) -C $(KDIR) M=$$PWD

install: default
	$(MAKE) -C $(KDIR) M=$$PWD modules_install

```
