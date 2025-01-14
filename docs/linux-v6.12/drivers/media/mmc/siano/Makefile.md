---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/mmc/siano/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SMS_SDIO_DRV) += smssdio.o

ccflags-y += -I $(srctree)/drivers/media/common/siano

```
