---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/olpc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# OLPC XO platform-specific drivers
#
obj-$(CONFIG_OLPC_EC)		+= olpc-ec.o
obj-$(CONFIG_OLPC_XO175_EC)	+= olpc-xo175-ec.o

```
