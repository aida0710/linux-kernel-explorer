---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/wangxun/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Wangxun network device drivers.
#

obj-$(CONFIG_LIBWX) += libwx/
obj-$(CONFIG_TXGBE) += txgbe/
obj-$(CONFIG_NGBE) += ngbe/

```
