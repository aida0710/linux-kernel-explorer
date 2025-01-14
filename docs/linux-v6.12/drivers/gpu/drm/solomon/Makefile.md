---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/solomon/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_DRM_SSD130X)	+= ssd130x.o
obj-$(CONFIG_DRM_SSD130X_I2C)	+= ssd130x-i2c.o
obj-$(CONFIG_DRM_SSD130X_SPI)	+= ssd130x-spi.o

```
