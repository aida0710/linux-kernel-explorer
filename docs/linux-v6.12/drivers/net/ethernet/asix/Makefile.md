---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/asix/Makefile`

### コンテンツ

```txt
#
# Makefile for the Asix network device drivers.
#

obj-$(CONFIG_SPI_AX88796C) += ax88796c.o
ax88796c-y := ax88796c_main.o ax88796c_ioctl.o ax88796c_spi.o

```
