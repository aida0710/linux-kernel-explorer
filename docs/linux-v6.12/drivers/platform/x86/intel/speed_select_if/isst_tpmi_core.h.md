---
sidebar_position: 8
---
# isst_tpmi_core.h

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/speed_select_if/isst_tpmi_core.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Intel Speed Select Interface: Drivers Internal defines
 * Copyright (c) 2023, Intel Corporation.
 * All rights reserved.
 *
 */

#ifndef _ISST_TPMI_CORE_H
#define _ISST_TPMI_CORE_H

int tpmi_sst_init(void);
void tpmi_sst_exit(void);
int tpmi_sst_dev_add(struct auxiliary_device *auxdev);
void tpmi_sst_dev_remove(struct auxiliary_device *auxdev);
void tpmi_sst_dev_suspend(struct auxiliary_device *auxdev);
void tpmi_sst_dev_resume(struct auxiliary_device *auxdev);
#endif

```
