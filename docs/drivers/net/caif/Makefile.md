---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `drivers/net/caif/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
ccflags-$(CONFIG_CAIF_DEBUG) := -DDEBUG

# Serial interface
obj-$(CONFIG_CAIF_TTY) += caif_serial.o

# Virtio interface
obj-$(CONFIG_CAIF_VIRTIO) += caif_virtio.o

```
