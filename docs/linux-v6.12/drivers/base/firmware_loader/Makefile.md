---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/base/firmware_loader/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for the Linux firmware loader

obj-$(CONFIG_FW_LOADER_USER_HELPER) += fallback_table.o
obj-$(CONFIG_FW_LOADER)	+= firmware_class.o
firmware_class-objs := main.o
firmware_class-$(CONFIG_FW_LOADER_USER_HELPER) += fallback.o
firmware_class-$(CONFIG_EFI_EMBEDDED_FIRMWARE) += fallback_platform.o
firmware_class-$(CONFIG_FW_LOADER_SYSFS) += sysfs.o
firmware_class-$(CONFIG_FW_UPLOAD) += sysfs_upload.o

obj-y += builtin/

```
