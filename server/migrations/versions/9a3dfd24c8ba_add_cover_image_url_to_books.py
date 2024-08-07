"""Add cover_image_url to books

Revision ID: 9a3dfd24c8ba
Revises: 9c670d0089fa
Create Date: 2024-07-25 18:25:43.222914

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a3dfd24c8ba'
down_revision = '9c670d0089fa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.add_column(sa.Column('cover_image_url', sa.String(length=255), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.drop_column('cover_image_url')

    # ### end Alembic commands ###
