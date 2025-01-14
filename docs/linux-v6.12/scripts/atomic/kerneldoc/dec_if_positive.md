---
sidebar_position: 9
---
# dec_if_positive

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/dec_if_positive`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic decrement if positive with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 *
 * If (@v > 0), atomically updates @v to (@v - 1) with ${desc_order} ordering.
 * Otherwise, @v is not modified and relaxed ordering is provided.
 *
 * ${desc_noinstr}
 *
 * Return: The old value of (@v - 1), regardless of whether @v was updated.
 */
EOF

```
