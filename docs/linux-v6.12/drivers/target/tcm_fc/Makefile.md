---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/target/tcm_fc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
tcm_fc-y +=		tfc_cmd.o \
			tfc_conf.o \
			tfc_io.o \
			tfc_sess.o

obj-$(CONFIG_TCM_FC)	+= tcm_fc.o

```
