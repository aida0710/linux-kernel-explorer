---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/arcmsr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# File: drivers/arcmsr/Makefile
# Makefile for the ARECA PCI-X PCI-EXPRESS SATA RAID controllers SCSI driver.

arcmsr-objs := arcmsr_attr.o arcmsr_hba.o

obj-$(CONFIG_SCSI_ARCMSR) := arcmsr.o

```
