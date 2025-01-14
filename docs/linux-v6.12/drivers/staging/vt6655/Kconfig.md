---
sidebar_position: 13
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vt6655/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config VT6655
   tristate "VIA Technologies VT6655 support"
   depends on PCI && HAS_IOPORT && MAC80211 && m
   help
     This is a vendor-written driver for VIA VT6655.

```
