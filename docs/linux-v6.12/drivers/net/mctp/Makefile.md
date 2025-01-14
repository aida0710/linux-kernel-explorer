---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/mctp/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_MCTP_SERIAL) += mctp-serial.o
obj-$(CONFIG_MCTP_TRANSPORT_I2C) += mctp-i2c.o
obj-$(CONFIG_MCTP_TRANSPORT_I3C) += mctp-i3c.o

```
