---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/wiznet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_WIZNET_W5100) += w5100.o
obj-$(CONFIG_WIZNET_W5100_SPI) += w5100-spi.o
obj-$(CONFIG_WIZNET_W5300) += w5300.o

```
