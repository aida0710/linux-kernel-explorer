---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/dsa/xrs700x/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_NET_DSA_XRS700X) += xrs700x.o
obj-$(CONFIG_NET_DSA_XRS700X_I2C) += xrs700x_i2c.o
obj-$(CONFIG_NET_DSA_XRS700X_MDIO) += xrs700x_mdio.o

```
