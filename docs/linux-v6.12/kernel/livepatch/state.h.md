---
sidebar_position: 9
---
# state.h

### ファイル情報

- パス: `linux-v6.12/kernel/livepatch/state.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LIVEPATCH_STATE_H
#define _LIVEPATCH_STATE_H

#include <linux/livepatch.h>

bool klp_is_patch_compatible(struct klp_patch *patch);

#endif /* _LIVEPATCH_STATE_H */

```
