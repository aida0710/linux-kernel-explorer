---
sidebar_position: 208
---
# xe_pci.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_pci.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef _XE_PCI_H_
#define _XE_PCI_H_

int xe_register_pci_driver(void);
void xe_unregister_pci_driver(void);

#endif

```
