---
sidebar_position: 11
---
# transition.h

### ファイル情報

- パス: `linux-v6.12/kernel/livepatch/transition.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LIVEPATCH_TRANSITION_H
#define _LIVEPATCH_TRANSITION_H

#include <linux/livepatch.h>

extern struct klp_patch *klp_transition_patch;

void klp_init_transition(struct klp_patch *patch, int state);
void klp_cancel_transition(void);
void klp_start_transition(void);
void klp_try_complete_transition(void);
void klp_reverse_transition(void);
void klp_force_transition(void);

#endif /* _LIVEPATCH_TRANSITION_H */

```
