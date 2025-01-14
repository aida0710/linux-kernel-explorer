---
sidebar_position: 6
---
# xe_display_misc.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/display/xe_display_misc.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
/*
 * Copyright © 2023 Intel Corporation
 */

#include "intel_display_types.h"

struct pci_dev;

unsigned int intel_gmch_vga_set_decode(struct pci_dev *pdev, bool enable_decode);

unsigned int intel_gmch_vga_set_decode(struct pci_dev *pdev, bool enable_decode)
{
	/* ToDo: Implement the actual handling of vga decode */
	return 0;
}

```
