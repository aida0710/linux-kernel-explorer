---
sidebar_position: 11
---
# ext_caps.h

### ファイル情報

- パス: `linux-v6.12/drivers/i3c/master/mipi-i3c-hci/ext_caps.h`

### コンテンツ

```h
/* SPDX-License-Identifier: BSD-3-Clause */
/*
 * Copyright (c) 2020, MIPI Alliance, Inc.
 *
 * Author: Nicolas Pitre <npitre@baylibre.com>
 *
 * Extended Capability Definitions
 */

#ifndef EXTCAPS_H
#define EXTCAPS_H

/* MIPI vendor IDs */
#define MIPI_VENDOR_NXP			0x11b


int i3c_hci_parse_ext_caps(struct i3c_hci *hci);

#endif

```
