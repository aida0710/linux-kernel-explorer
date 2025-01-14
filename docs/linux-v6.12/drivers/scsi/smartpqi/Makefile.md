---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/smartpqi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_SCSI_SMARTPQI) += smartpqi.o
smartpqi-objs := smartpqi_init.o smartpqi_sis.o smartpqi_sas_transport.o

```
