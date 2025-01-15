---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/fungible/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-3-Clause)
#
# Makefile for the Fungible network device drivers.
#

obj-$(CONFIG_FUN_CORE) += funcore/
obj-$(CONFIG_FUN_ETH) += funeth/

```
