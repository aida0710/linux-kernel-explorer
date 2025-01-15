---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/fungible/funcore/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-3-Clause)

obj-$(CONFIG_FUN_CORE) += funcore.o

funcore-y := fun_dev.o fun_queue.o

```
