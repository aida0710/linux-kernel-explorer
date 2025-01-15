---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `net/ieee802154/6lowpan/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_IEEE802154_6LOWPAN) += ieee802154_6lowpan.o

ieee802154_6lowpan-y := core.o rx.o reassembly.o tx.o

```
