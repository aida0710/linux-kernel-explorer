---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/altera-stapl/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
altera-stapl-y = altera-jtag.o altera-comp.o altera.o
altera-stapl-$(CONFIG_HAS_IOPORT) += altera-lpt.o

obj-$(CONFIG_ALTERA_STAPL) += altera-stapl.o

```
