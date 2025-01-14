---
sidebar_position: 2
---
# expected_stdout

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/new_choice_with_dep/expected_stdout`

### コンテンツ

```txt
A (A) [N/y/?] (NEW) y
  Choice ?
  > 1. Choice B (CHOICE_B)
    2. Choice C (CHOICE_C) (NEW)
  choice[1-2?]: 
Choice2 ?
  1. Choice D (CHOICE_D)
> 2. Choice E (CHOICE_E)
  3. Choice F (CHOICE_F) (NEW)
choice[1-3?]: 

```
