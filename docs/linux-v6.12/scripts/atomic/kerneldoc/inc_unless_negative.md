---
sidebar_position: 14
---
# inc_unless_negative

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/inc_unless_negative`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic increment unless negative with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 *
 * If (@v >= 0), atomically updates @v to (@v + 1) with ${desc_order} ordering.
 * Otherwise, @v is not modified and relaxed ordering is provided.
 *
 * ${desc_noinstr}
 *
 * Return: @true if @v was updated, @false otherwise.
 */
EOF

```
